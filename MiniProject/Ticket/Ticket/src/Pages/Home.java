package Pages;

import java.util.Scanner;

public class Home {
    public static void HomePage(String username) throws ClassNotFoundException {
        Scanner sc = new Scanner(System.in);

        System.out.println("Ticket Reservation");
        System.out.println("Welcome to Ticket Page");
        System.out.println("Type 'NEXT' to proceed with");
        System.out.println("booking an Appointment!");
        System.out.println();
        System.out.println();

        String str = sc.nextLine();

        if (str.equalsIgnoreCase("NEXT")) {
//        	String choice = sc.nextLine();
        	Amount.amount(username);
//        	System.out.println("Enter the date : ");
//        	String date = sc.nextLine();
//        	
//        	if(choice.equals("sports"))
//        	{
//        		sports.sport();
//        		Seats.seat();
//        	}
//        	
//        	else if(choice.equals("concerts"))
//        	{
//        		concerts.concert();
//        		Seats.seat();
//        	}
//  
//        	else
//        	{
//        		System.out.println("Invalid Credentials");
//        	}
        } else {
            System.out.println("Oops!! Please Re-Check & Try Again");
            HomePage(username);
        }
    }


}