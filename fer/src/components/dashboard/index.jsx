import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
} from "@mui/material";
import axios from "axios";

export default function Dashboard() {
  const [currentID, setCurrentID] = React.useState(null);
  const [deleteID, setDeleteID] = React.useState(null);
  const [data, setData] = React.useState({
    title: "",
    description: "",
    created: 1698984131,
    view: 95,
    actractive: true,
  });

  const handleOnchange = (event) => {
    const name = event.target.name;
    let value;

    if (name === "actractive") {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    data[name] = value;
    console.log(data);
    setData({ ...data });
  };

  function formatDate(timestamp, format) {
    const date = new Date(timestamp);

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    const formattedDate = date.toLocaleString("vi-VN", options);

    const formatMapping = {
      "dd/MM/yyyy": formattedDate,
      "MM/dd/yyyy": formattedDate,
      "yyyy-MM-dd": formattedDate,
      "HH:mm:ss": formattedDate.slice(11),
      // Add more formats if needed
    };

    return formatMapping[format] || "Invalid Format";
  }

  function dateToTimestamp(date) {
    return new Date(date).getTime();
  }

  React.useEffect(() => {
    console.log(dateToTimestamp(new Date()));
    console.log(formatDate(1698994698334, "dd/MM/yyyy"));
  }, []);

  const handleClose = () => {
    setCurrentID(null);
  };

  const handleCloseConfirmDelete = () => {
    setDeleteID(null);
  };

  const handleDelete = () => {
    axios
      .delete(`https://654592f9fe036a2fa95478f4.mockapi.io/studentManagement/${deleteID}`)
      .then(() => {
        // tắt modal
        setDeleteID(null);

        // lấy lại danh sách mới nhất đã xóa
        fetchNews();

        alert("Deleted!");
      })
      .catch();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentID === 0) {
      axios
        .post(`https://654592f9fe036a2fa95478f4.mockapi.io/studentManagement`, data)
        .then((res) => {
          setCurrentID(null);
          fetchNews();
          alert("Created!");
        })
        .catch();
    } else {
      axios
        .put(`https://654592f9fe036a2fa95478f4.mockapi.io/studentManagement/${currentID}`, data)
        .then((res) => {
          setCurrentID(null);
          fetchNews();
          alert("Updated!");
        })
        .catch();
    }
    // Handle form submission logic here
    // Access form data and perform actions
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [news, setNews] = React.useState([]);

  const fetchNews = () => {
    axios
      .get(`https://654592f9fe036a2fa95478f4.mockapi.io/studentManagement`)
      .then((response) => {
        setNews(response.data);
      })
      .catch();
  };

  React.useEffect(() => {
    // promise
    fetchNews();
  }, []);

  React.useEffect(() => {
    if (currentID) {
      axios
        .get(`https://654592f9fe036a2fa95478f4.mockapi.io/studentManagement/${currentID}`)
        .then((response) => {
          setData(response.data);
        })
        .catch();
    } else {
      setData({
        title: "",
        description: "",
        created: "",
        view: 0,
        actractive: false,
      });
    }
  }, [currentID]);

  return (
    <TableContainer component={Paper}>
      <Button
        variant="contained"
        onClick={() => {
          setCurrentID(0);
        }}
      >
        Add
      </Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">DateOfBirth</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {news.map((row) => (
            <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row" align="center">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{formatDate(row.created, "dd/MM/yyyy")}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  style={{
                    marginRight: 10,
                  }}
                  onClick={() => {
                    setCurrentID(row.id);
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setDeleteID(row.id);
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal
        open={currentID !== null}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <h5>{currentID === 0 ? "Add new" : "Update"}</h5>
            <Grid container spacing={2}>
              {/* Input fields for form */}
              {/* Example: */}
              <Grid item xs={12}>
                <TextField
                  value={data.title}
                  onChange={handleOnchange}
                  variant="outlined"
                  required
                  fullWidth
                  id="title"
                  label="title"
                  name="title"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  value={data.description}
                  onChange={handleOnchange}
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                  fullWidth
                  id="description"
                  label="Desctiption"
                  name="description"
                />
              </Grid>

              <Grid item xs={12}>
                <input value={data.created} type="date" name="created" onChange={handleOnchange} />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  checked={data.actractive}
                  name="actractive"
                  onChange={handleOnchange}
                  control={<Switch defaultChecked />}
                  label="Status"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  value={data.view}
                  onChange={handleOnchange}
                  type="number"
                  variant="outlined"
                  required
                  fullWidth
                  id="view"
                  label="View"
                  name="view"
                />
              </Grid>
              {/* Additional fields and components for form */}
            </Grid>
            <Button
              style={{
                marginTop: 20,
              }}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      <Modal
        open={deleteID !== null}
        onClose={handleCloseConfirmDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Do you want to delete this record?
          </Typography>

          <Button
            style={{
              marginTop: 20,
            }}
            variant="contained"
            color="error"
            fullWidth
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Box>
      </Modal>
    </TableContainer>
  );
}
