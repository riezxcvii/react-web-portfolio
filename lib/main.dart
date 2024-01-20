import 'package:flutter/material.dart';

void main() => runApp(BudgetWise());

class BudgetWise extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Login(),
    );
  }
}

class Login extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              height: 310,
              child: Image.asset('assets/logo1.png'),
            ),
            const Text(
              'Welcome!',
              style: TextStyle(
                fontSize: 23,
                fontWeight: FontWeight.w900,
                color: Colors.black,
              ),
            ),
            const SizedBox(
              height: 15,
            ),
            const SizedBox(
              height: 45,
              width: 300,
              child: TextField(
                obscureText: false,
                decoration: InputDecoration(
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(
                      Radius.circular(8.0),
                    ),
                  ),
                  labelText: 'Username',
                ),
              ),
            ),
            const SizedBox(
              height: 15,
            ),
            const SizedBox(
              height: 45,
              width: 300,
              child: TextField(
                obscureText: true,
                decoration: InputDecoration(
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(
                      Radius.circular(8.0),
                    ),
                  ),
                  labelText: 'Password',
                ),
              ),
            ),
            const SizedBox(
              height: 15,
            ),
            SizedBox(
              height: 40,
              width: 300,
              child: ElevatedButton(
                onPressed: () {
                  // Navigate to another page (you can replace SignUp with the actual sign-up page)
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => Dashboard()),
                  );
                },
                style: ElevatedButton.styleFrom(
                  primary: Color(0xFFCC7351),
                ),
                child: const Text(
                  'Log in',
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w900,
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            const SizedBox(
              height: 15,
            ),
            GestureDetector(
              onTap: () {
                // Navigate to the sign-up page
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => SignUp()),
                );
              },
              child: RichText(
                text: const TextSpan(
                  text: 'Don\'t have an account? ',
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                    color: Colors.black,
                  ),
                  children: <TextSpan>[
                    TextSpan(
                      text: 'Sign up',
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w500,
                        decoration: TextDecoration.underline,
                        color: Colors.black,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class SignUp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              height: 220,
              child: Image.asset('assets/logo1.png'),
            ),
            const Text(
              'Sign Up',
              style: TextStyle(
                fontSize: 23,
                fontWeight: FontWeight.w900,
                color: Colors.black,
              ),
            ),
            const SizedBox(
              height: 15,
            ),
            const SizedBox(
              height: 45,
              width: 300,
              child: TextField(
                obscureText: false,
                decoration: InputDecoration(
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(
                      Radius.circular(8.0),
                    ),
                  ),
                  labelText: 'First Name',
                ),
              ),
            ),
            const SizedBox(
              height: 15,
            ),
            const SizedBox(
              height: 45,
              width: 300,
              child: TextField(
                obscureText: false,
                decoration: InputDecoration(
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(
                      Radius.circular(8.0),
                    ),
                  ),
                  labelText: 'Last Name',
                ),
              ),
            ),
            const SizedBox(
              height: 15,
            ),
            const SizedBox(
              height: 45,
              width: 300,
              child: TextField(
                obscureText: false,
                decoration: InputDecoration(
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(
                      Radius.circular(8.0),
                    ),
                  ),
                  labelText: 'Username',
                ),
              ),
            ),
            const SizedBox(
              height: 15,
            ),
            const SizedBox(
              height: 45,
              width: 300,
              child: TextField(
                obscureText: true,
                decoration: InputDecoration(
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(
                      Radius.circular(8.0),
                    ),
                  ),
                  labelText: 'Password',
                ),
              ),
            ),
            const SizedBox(
              height: 25,
            ),
            SizedBox(
              width: 300,
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    horizontal: 1), // Adjust the padding as needed
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    SizedBox(
                      width: 140,
                      height: 40, // Adjust the width of the Create button
                      child: ElevatedButton(
                        onPressed: () {
                          // Navigate to another page (you can replace SignUp with the actual sign-up page)
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => Login()),
                          );
                        },
                        style: ElevatedButton.styleFrom(
                          primary: Colors.black,
                        ),
                        child: const Text(
                          'Cancel',
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w900,
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      width: 140,
                      height: 40, // Adjust the width of the Cancel button
                      child: ElevatedButton(
                        onPressed: () {
                          // Implement the cancel button functionality here
                        },
                        style: ElevatedButton.styleFrom(
                          primary: Color(0xFFCC7351),
                        ),
                        child: const Text(
                          'Create',
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w900,
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class Dashboard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Create an instance of RecentTransactions
    RecentTransactions recentTransactions = RecentTransactions(
      category: 'Grocery',
      titleSpent: 'Foods',
      amount: 4134.55,
    );

    return Scaffold(
      appBar: AppBar(
        title: Container(
          width: 140,
          child: Image.asset('logo2.png'),
        ),
        backgroundColor: const Color(0xFFCC7351),
        automaticallyImplyLeading: false,
      ),
      body: Container(
        color: const Color(0xFFF4F2DE),
        padding: const EdgeInsets.all(16),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Money(totalMoneyLabel: 'Total Money', totalMoney: 4000.8),
            SizedBox(height: 20),
            Center(),
            SizedBox(height: 20),
            Text(
              'Recent Transaction',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w900,
              ),
            ),
            RecentTransactions(
              category: 'Grocery',
              titleSpent: 'Foods',
              amount: 4134.55,
            ),
             SizedBox(height: 20),
            Text(
              'Budget Categories',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w900,
              ),
            ),
            BudgetCategories(
              category: recentTransactions.category,
              amount: recentTransactions.amount,
            ),
          ],
        ),
      ),
    );
  }
}


class Money extends StatelessWidget {
  final String totalMoneyLabel;
  final double totalMoney;

  const Money({required this.totalMoneyLabel, required this.totalMoney});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      height: 133,
      padding: EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(10), // Adjust the radius as needed
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.2),
            spreadRadius: 3,
            blurRadius: 7,
            offset: Offset(0, 2), // changes the position of the shadow
          ),
        ],
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(
            totalMoneyLabel,
            style: const TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.w900,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(
            height: 5,
          ),
          const SizedBox(height: 8),
          Text(
            totalMoney.toString(), // Convert double to String
            style: const TextStyle(
              fontSize: 40,
              fontWeight: FontWeight.w900,
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}

class RecentTransactions extends StatelessWidget {
  final String category;
  final String titleSpent;
  final double amount;

  const RecentTransactions({
    required this.category,
    required this.titleSpent,
    required this.amount,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      height: 90,
      padding: const EdgeInsets.all(16),
      margin: const EdgeInsets.only(top: 20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(10),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.2),
            spreadRadius: 3,
            blurRadius: 7,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            category,
            style: const TextStyle(
              fontSize: 13,
              fontWeight: FontWeight.w900,
            ),
          ),
          const SizedBox(height: 5),
          Row(
            children: [
              Text(
                titleSpent,
                style: const TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.w900,
                ),
              ),
              const Spacer(), // This will push the additional text to the right
              Text(
                amount.toString(),
                style: const TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.w900,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class BudgetCategories extends StatelessWidget {
  final String category;
  final double amount;

  const BudgetCategories({
    required this.category,
    required this.amount,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      height: 60,
      padding: const EdgeInsets.all(16),
      margin: const EdgeInsets.only(top: 20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(10),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.2),
            spreadRadius: 3,
            blurRadius: 7,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 5),
          Row(
            children: [
              Text(
                category,
                style: const TextStyle(
                  fontSize: 13,
                  fontWeight: FontWeight.w900,
                ),
              ),
              const Spacer(), // This will push the additional text to the right
              Text(
                amount.toString(),
                style: const TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.w900,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
