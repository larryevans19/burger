# Burgerlar

![](public/img/fave.png)

## About

**Burgerlar** is a **Node**, **Express**, **MySQL**, and **Handlebars** powered full stack website deployed via **Heroku** designed to allow a user to manage a list of their favorite burgers and track which ones they have devoured. 

## How it Works

The **Burgerlar** managers the user's list of burgers through a **MySQL** database featuring a `burgers` table.  The `burgers` table comes pre-stocked with 3 author recommended burgers.  These appear in the list in the left hand column of burgers the user has queued up to devour.  The user adds burgers to the list by entering them in them into the _Add a Burger_ section of the page.  When a the user clicks the button to add the new burger, a POST request inserts the new addition into the `burgers` table of the database.  **Burgerlar's** use of a **Handlebars** template immediately renders the new burger into the list of burgers for the user to devour.

As users are able to sample the burgers from their list of burgers to devour, they can update their list to take this into account.  Each entry in the list of burgers to devour has a `Devour It` button, which when clicked will move the burger into the column on the right of burgers that have been devoured.  This is accomplished by a PUT request that is triggered when the button is clicked that updates the record for the particular burger in the `burgers` table to identify that the burger has been devoured.  The magic of **Handlebars** then comes in to immediately move the burger into the correct column on the page based on the devoured status.   

**Burgerlar** allows the user to manage their burger wish list until all of the burgers have dissappeared into their stomach!  Get eating!

## Eat Some Burgers!##

Bring your APPetite here:
https://burgerlar.herokuapp.com/

