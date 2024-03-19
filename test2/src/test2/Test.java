package test2;

import java.util.Scanner;

public class Test {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
				
//		Cách đọc và chuẩn đoán lỗi
//		    - Luôn luôn đọc dòng đầu tiên
//		    - Tìm tới dòng nào có chữ Cause By

	    
//	    Math.sqrt(sotri)
	    System.out.println("Bai 1");
	    System.out.println("nhap canh goc vuong 1");
	    Float cgv1 = scanner.nextFloat();
	    
	    System.out.println("nhap canh goc vuong 2");
	    Float cgv2 = scanner.nextFloat();
	    
	    System.out.println("Chieu dai canh huyen :" + Math.sqrt( (cgv1 * cgv1) + (cgv2 * cgv2) ));
	    
	    
	    
	    System.out.println("Bai 2");
		System.out.print("nhap a (số thực)");
		Float a = scanner.nextFloat();
		
		int x = 8;
		
		double n;
        do {
            System.out.print("Nhap gia tri cua n (so thuc khong am): ");
            n = scanner.nextDouble();
        } while (n < 0);
		
		System.out.println("P(x) = " + a * Math.pow(8, n));
		
		
		
		System.out.println("Bai 3");
		int yz;
		do {
			System.out.println("nhap vao so co 2 chu so: ");
			yz = scanner.nextInt();
		} while (yz < 10 || yz > 99);
		
		int z = yz % 10 ;
		int y = (yz - z) / 10;
		
		System.out.println("Tong = " + (y + z));
		
		
		
		System.out.println("Bai 4");
		System.out.println("nhap vao so thu nhat: ");
		Float so1 = scanner.nextFloat();
		System.out.println("nhap vao so thu hai: ");
		Float so2 = scanner.nextFloat();
		System.out.println("nhap vao so thu ba: ");
		Float so3 = scanner.nextFloat();
		System.out.println("nhap vao so thu tu: ");
		Float so4 = scanner.nextFloat();
		System.out.println("nhap vao so thu nam: ");
		Float so5 = scanner.nextFloat();
		
		System.out.println("Tong 5 so = " + ((so1 + so2 + so3 + so4 + so5) / 5));
		
		
		
		System.out.println("Bai 5");
		System.out.println("nhap vao do C: ");
		int DoC = scanner.nextInt();
		
		System.out.println("Do F = " + ((DoC * 1.8) + 32) + "'F");
		
		
		
		System.out.println("Bai 6");
		System.out.println("nhap vao so USD: ");
		Double USD = scanner.nextDouble();
		
		System.out.println("tien VND = " + (USD * 23.500) + "d");
	
	}
}
