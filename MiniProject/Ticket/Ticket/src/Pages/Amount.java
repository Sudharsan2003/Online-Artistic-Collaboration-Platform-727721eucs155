package Pages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class Amount {
	
	

	public static void amount(String username) throws ClassNotFoundException
	{
		
		Scanner sc = new Scanner (System.in);
		System.out.println("Enter the Choice : sports/concerts : ");
		String choice = sc.nextLine();
		
		if(choice.equals("sports"))
    	{
    		sports.sport(username,choice);
//    		Seats.seat();
    	}
    	
    	else if(choice.equals("concerts"))
    	{
    		concerts.concert(username, choice);
//    		Seats.seat();
    	}

    	else
    	{
    		System.out.println("Invalid Credentials");
    		Amount.amount(choice);
    	}
//		System.out.println("            Cost for Seats      ");
//		System.out.println("For Premium : Rs 1500");
//		System.out.println("For Normal : Rs 800");
//		System.out.print("Are you sure to buy Tickets (y/n) : ");
//		String ans = sc.nextLine();
//		if(ans.equals("y"))
//		{
//			Home.HomePage();
//		}
//		
//		else
//		{
//			System.out.println("Thank You For Visiting");
//		}
	}

}
