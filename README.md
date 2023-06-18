                         **  Notekeeper Setup Guide  **

** Clone Project ** :

Open CMD and go to the folder where you want to place your project.
run command : git clone https://github.com/Akshita963/Agrex.ai.git
 
 
** Frontend: **

Requirements: nodejs, npm (Node.js package manager) 

Open project in any ide like visual studio code. 

Steps: 

1. npm install       // For installing all the requirements. 

2. npm start        // To run the server. 

 

 

** BackEnd: **

Requirements: python, django. 

Open project in any ide like visual studio code or PyCharm. 

Steps: 

1. pip install -r requirements.txt              // For installing all the requirements. 

// By default it is using sqlite3 DB and we can change tha name of db inside settings.py. 

2. python manage.py makemigrations   //converting model classes into db queries. 

3. python manage.py migrate              //creating table in specified db based on model. 

4. python manage.py runserver                  // to run the app on local server. 
