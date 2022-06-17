# Subscribers with shared fields

A small application demonstrating the creation of subscribers and the creation of separate shared subscriber fields. Each subscriber can then link the shared fields to themselves with values for the specific field. In this way the fields are shared and the same fields are accessible to all subscribers.

The application makes use of a Restful API to manage the subscribers and fields with a Vuejs frontend. Laravel Sanctum is used for authorization and Pinia is used as a frontend store.

## Installation

Install the composer dependencies.

```bash
composer install
```

Install the npm dependencies.

```bash
npm install
```

Copy `.env.example` to `.env` and configure the database settings.

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mailerlite_task
DB_USERNAME=root
DB_PASSWORD=
```

Set the `APP_URL` in the `.env` file if not using `php artisan serve`. The `APP_URL` needs to correspond to your domain.

```bash
APP_URL=http://subscribers-with-shared-fields.localhost
```

Create the application key.

```bash
php artisan key:generate
```

Migrate and seed the database.

```bash
php artisan migrate:refresh --seed
```

## Tests

Run the API based tests using [Pest](https://pestphp.com/).

```bash
./vendor/bin/pest
```

## Minimal SPA frontend

Serve the SPA frontend, default location `http://127.0.0.1:8000`
```bash
php artisan serve
```

The default seeded user has the following credentials:

* Email: ```admin@example.com```
* Password: ```admin```
