# 💻 Application Overview

The application is pretty simple. Users can create teams where other users can join, and they start discussions on different topics between each other.

A team is created during the registration if the user didn't choose to join an existing team and the user becomes the admin of it.

[Demo](https://lvc-front-end-app.netlify.app)

## Data model

The application contains the following models:

- User - can have one of these roles:

  - `ADMIN` can:
    - create/edit/delete discussions
    - create/delete all comments
    - delete users
    - edit own profile
  - `USER` - can:
    - edit own profile
    - create/delete own comments

- Team: represents a team that has 1 admin and many users that can participate in discussions between each other.

- Discussion: represents discussions created by team members.

- Comment: represents all the messages in a discussion.
