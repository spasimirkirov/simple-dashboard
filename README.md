## Simple Dashboard

This project is a simple exercise which serves only educational purposes.

It has the ability to show 9 different widgets on a dashboard page, which has to be previously configured in edit mode.

How to use:
Download the project by using GIT: 

`git clone https://github.com/spasimirkirov/simple-dashboard.git`

Navigate to simple-dashboard folder, open terminal there and type `composer install` to install Laravel dependencies.

After installing the dependencies copy `.env.example` from the main folder and rename it to `.env`.

Open Terminal and generate an APP Key by running `php artisan key:generate`

Create a mysql database and change the database configuration in `.env`.

Once your database have been created, run in terminal `php artisan migrate` to create your database schema.

Compile the assets by running in terminal the one of following commands
 `npm install && npm run dev` for development `npm install && npm run prod` for production 

For development, you can use artisan web server by running the `php artisan serve` command in terminal and navigate to 

To try a fresh database with test widgets, run `php artisan migrate:refresh --seed`

### Powered by 
<p align="center"><a href="https://laravel.com" target="_blank">
    <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a>
</p>
