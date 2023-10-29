# Guide for Contributions

## Thank you for considering contributing to our project
We would like to thank the following individuals for their contributions to this project. Without their help, this project would not have been possible. 

## Things to keep in mind
All sorts of contributions to the project are welcomed be it code contributions, improving docs or any other form of contributions. Please keep in mid the following points when contributing -

- Be respectful to your fellow contributors and project maintainers
- Be patient, while your PRs might take time to be reviewed. The project maintainers give time to the project from their busy schedule so some times the PR review might get delayed.
- Make sure to not use any foul language during a conversation with fellow contributors or project manitainers

# Testing the backend API

## `curl localhost:6000 | jq`

This will give you output in nice JSON format

<hr>

## `curl localhost:6000 -XDELETE -v`

This is give a DELETE request to server

<hr>

## `curl localhost:6000 -d '{}'`

This is for POST request to the server.

<hr>

## `$ curl -v localhost:6000/1 -XPUT`

This is for PUT method with id 1

<hr>

## `curl -v localhost:6000/1 -XPUT -d '{"name": "samosa", "description" : "spicy"}'`

This is used to PUT and update the data for the id 1