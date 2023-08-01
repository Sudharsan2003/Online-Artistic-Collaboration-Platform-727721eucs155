package Pages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class print {

	private static final String Driver = "com.mysql.cj.jdbc.Driver";
	private static final String URL = "jdbc:mysql://localhost:3306/ticket";
	private static final String USER = "root";
	private static final String PASSWORD = "root";

	public static void printTicket(String username, String Events, String seat_type, int no_of_seats, long Total_cost)
			throws ClassNotFoundException {
		Class.forName(Driver);

		try (Connection con = DriverManager.getConnection(URL, USER, PASSWORD);
				PreparedStatement stmt = con.prepareStatement(
						"INSERT INTO event (username, Events,seat_type,no_of_seats,Total_cost) VALUES (?, ?, ?, ?, ?)")) {

			stmt.setString(1, username);
			stmt.setString(2, Events);
			stmt.setString(3, seat_type);
			stmt.setInt(4, no_of_seats);
			stmt.setLong(5, Total_cost);

			int rowsAffected = stmt.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		}

//		System.out.println(username);
//		System.out.println(Events);
//		System.out.println(seat_type);
//
//		System.out.println(no_of_seats);
//		System.out.println(Total_cost);

	}

}
