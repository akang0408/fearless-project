
## Run application locally with single startup command (without Docker)
- Currently the port the solution is served on is configured to Port 3000.
- To change this simply replace the port number that is currently set to 3000 in the .env file (located in the root directory)
  - ie. Change 'PORT=3000' to 'PORT=3001'
- Run 'npm start' or 'yarn start' to run application locally without Docker.

## Run and serve application with Docker
1) Build and tag the Docker image with command:

docker build -t fearless:dev .

2) Spin up container once the build is done with command:

 docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    fearless:dev

3) -p 3001:3000 exposes port 3000 to other Docker containers on the same network (for inter-container communication) and port 3001 to the host. To change the port the application is served on locally simply change 3001 to the desired port number.

## Feature Updates
- We could take advantage of the different things the Count API offers to add enhancements to our application
2) Add a feature to create new unique Count API keys with optional params of namespace, value, enable_reset,
update_lowerbound and update_upperbound. Since our CounterComponent is reusable we could create and display new counter components for each new counter we created using the /create API endpoint.
3) Add an enhancement to the CounterComponent to be able set the count of a namespace/key to desired number (if the param enable_reset was set to 1 when the key was initially created) using the /set API endpoint.
4) Add an enhancement to the CounterComponent to be able to update a counter key/namespace with +/- amount. (The amount must be within update_lowerbound and update_upperbound specified during the creation of the key.) Update using the /update API endpoint.
5) Create a feature within the CounterComponent where an API call is made to the endpoint /info/:namespace?/:key
to get additional information about the counter key.