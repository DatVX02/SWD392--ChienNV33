package com.SWD.TicketResell.mapper;

import com.SWD.TicketResell.entity.User;
import com.SWD.TicketResell.request.UserCreationRequest;
import com.SWD.TicketResell.response.UserResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserCreationRequest request);

    UserResponse toUserResponse(User user);
}
