# Slidely Backend Server

This server has not been integrated with visual studio app , but you can test the endpoints in the terminal.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed
- npm or yarn package manager installed

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/your_project.git


### Navigate


1. Navigate into the current repository
   ```sh
    cd your_project


### Instal Dependencies
1. Install the required dependencies
   ```sh
      npm install
        or
      yarn install

### Run and test
1. Run the server
   ```sh
    npm run dev

2. Test the endpoints


   2.1. Get


          curl -X GET http://localhost:3000/ping
   2.2. Submit

            
            curl -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d '{"name": "random_name", "email": "random_email", "phone": "random_phone", "github_link": "random_link", "stopwatch_time": "random_time"}'

    2.3. Read
    
          
           curl -X GET "http://localhost:3000/read?index=0"
    You need to change the index = "" value as per the record you want to see in the read end point testing.


