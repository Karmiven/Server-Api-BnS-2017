![ViewCount](https://hits.sh/github.com/war100ck/Server-Api-BnS-2017.svg?style=flat-square)

![Dev.to blog](https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white)![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
# Blade & Soul Game API Server 2017

This repository contains the backend API server for the **Blade & Soul** private game server. The API facilitates user registration, login, profile management, virtual currency transactions, and character management. It integrates multiple databases and provides secure and scalable routes to handle user data efficiently. **Currently, it is designed only for the 2017 version of the game.**

This API server has been tested on a private Blade & Soul test server.

![Server Api B&S Server](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/0-1.png)

<details>
<summary>Click to see more screenshots</summary>

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/0-2.png)

</details>

<details>
<summary>Click to explore website screenshots</summary>

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/full_page_screen.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/site-01.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/site-02.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/site-03.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/site-04.png)

</details>

<details>
<summary>Click to view more screenshots of the Admin Panel</summary>

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-00.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-01.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-02.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-03.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-04.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-05.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-06.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-07.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-08.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-09.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-10.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-11.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-12.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-13.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-14.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-15.png)

<hr style="border: 1px solid #ccc; margin: 10px 0;">

![2.](https://raw.githubusercontent.com/war100ck/Server-Api-BnS-2017/main/screen/admin-16.png)

</details>

## Table of Contents

- [Key Features](#key-features)
- [Requirements](#requirements)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [B&S Game Launcher](#bns-game-launcher)
- [License](#license)
- [Discussion](#Discussion)
- [Additions / Fixes](#additions--fixes)

## Key Features

- **WebSite**: A comprehensive website offering seamless user experience with account profile viewing, including detailed character data, alongside an administrative panel for efficient user and content management.
- **User Authentication**: Secure user registration and login with email and password validation.
- **Admin Control Panel**: Comprehensive Admin Dashboard for efficient server and user management.
- **Profile Management**: Full support for viewing and updating user profiles, including character data and account information.
- **Character Management**: Tools for editing character details like faction, race, job, and other attributes.
- **Virtual Currency Transactions**: APIs to manage and add in-game currency to user accounts.
- **Item Management and Distribution**: Search the database for items by ItemID and dispatch them to user account characters via the admin panel.
- **Account Banning and Player Kicking**: Ability to impose a temporary or permanent account ban on a user, as well as the ability to promptly kick a player from the server.
- **VIP Privileges Management**: Effortlessly manage and assign VIP privileges to users through the admin panel. This feature allows administrators to grant special in-game benefits and access to premium content, ensuring an enhanced experience for VIP players.
- **Game Server Monitoring**: Real-time server monitoring that provides detailed insights into the number of players online, and their activity. This feature enables administrators to track server health, and monitor player.
- **Game Server Statistics**: Game statistics with insightful charts displaying the number of registered accounts, including breakdowns by character races, genders, classes, factions, and levels.
- **Database Integration**: Utilizes Microsoft SQL Server for managing user accounts, in-game data, and virtual currencies.
- **Logging**: Optional logging feature, controlled through environment variables, allows detailed logging to console for debugging and monitoring.
- **Scalability**: Designed to support a large number of users and database operations, ensuring performance and security for a Blade & Soul private server.
- **System Statistics**: Monitor CPU Usage, Memory Usage, and Server API Process Information to assess server load and performance in real time, helping ensure smooth operation and quick issue resolution.
- **API Configuration Management**: Real-time administration of `.env` parameters via the web interface, including sections for Server Configuration, Database Configurations, and Registration Logs, with automatic backup on changes and API server restart capability.
- **Server Process Management**: Ability to start, stop, and monitor server daemons and background processes directly from the admin panel.
- **News Management**: Integrated news editor module for creating, editing, and publishing news content on the main website page through the admin interface.
- **Promotions Management**: Control over in-game promotional events such as the Daily Dash login reward, with options for manual activation and automatic renewal.
- **Discord Integration**: Automated Discord bot support sending periodic server monitoring data to designated channels and supporting the `/online` chat command for current player counts.
- **Contextual Information Modals**: Context-sensitive informational pop-ups on all admin panel pages for enhanced usability and guidance.
- **Coupon System**: Manage promotional campaigns, generate and redeem coupons, and deliver rewards directly to users' in-game mail.
- **Mail & Item Monitoring**: Manage and track mail and items between players, including in-game mailbox.


## Requirements

- **Node.js** (v14.0.0 or higher)
- **Microsoft SQL Server** (***no lower than version 2017***) for handling game-related data
- **npm** (Node Package Manager)

## Installation

To set up the API server, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/war100ck/Server-Api-BnS-2017.git
    cd Server-Api-BnS-2017
    ```

2. **Run the Database Setup Script**:

    Before installing the server, make sure to run the `add_column_webadmin.bat` script, which adds the `WebsitePassword` and `admin` column to the `Users` table in the `PlatformAcctDb` database.

    To run the script, use the following command (on Windows):

    ```bash
    add_column_webadmin.bat
    ```

    This script will:
    
    - Check if the `WebsitePassword` and `admin` column exists in the `Users` table of the `PlatformAcctDb` database.
    - If the column does not exist, it will add it.
    - Confirm success or report any issues encountered during the operation.
	
3. **Run the Installation Script**:

    After running the database setup script, you can proceed to install the server. Use the provided `Install.bat` script to automatically create necessary configuration files and install all required dependencies.

    To run the script, use the following command (on Windows):

    ```bash
    Install.bat
    ```

    This script will:
    
    - Generate a `package.json` file with all the necessary npm dependencies.
    - Create `Start_Api.bat` for easy server startup.
    - Create the `.env` file with essential configuration for connecting to the game databases.
    - Install the required npm packages:
      - `express`, `mssql`, `dotenv`, `axios`, `cors`, `ejs`, `argon2`, `bcrypt`, `bootstrap`, `chalk`, `express-session`, `mysql2`, `os-utils`, `pidusage`, `xml2js`, `@fortawesome/fontawesome-free`, `archiver`, `body-parser`, `bootstrap-icons`, `chart.js`, `cheerio`, `compression`, `cookie-parser`, `csurf`, `discord.js`, `express-rate-limit`, `express-validator`, `helmet`, `jquery`, `jsonwebtoken`, `marked`, `moment`, `multer`, `nodemailer`, `ps-node`, `request`, `serve-favicon`, `sweetalert2`, `tedious`, `winston`

	  

4. **Configuration of Categories and Display of Items in Item Management and Distribution** 
 
4.1. **Database Restore Script**:  
     The `restore_databases.sql` script is provided to help you restore the `GameItemsDB` database from the backup file.  
     > **Note:** Before running the script, ensure that you modify the following paths within it:  
     > - Specify the path to the backup file: `"Path to the backup file"`.  
     > - Set the location for the primary database file (`.mdf`).  
     > - Set the location for the transaction log file (`.ldf`).
	 
*Note: The full [**README.md**](https://github.com/war100ck/Server-Api-BnS-2017/tree/main/DB)
 file with detailed instructions for setting up the **"Sending Items"** functionality can be found in the `GAME_ITEMS_DB` folder. It includes guidance on restoring the database, configuring image filenames, and managing item data required for proper system functionality. Please refer to this document for complete setup steps and further details.*

5. **Configuration**:

    After running the installation script, the `.env` file will be generated with default configurations. Make sure to adjust database credentials and other environment variables if needed:
    
    - `PLATFORM_ACCT_DB_USER`
    - `PLATFORM_ACCT_DB_PASSWORD`
    - `PLATFORM_ACCT_DB_SERVER`
    - `BLGAME01_DB_USER`
    - `SERVICE_URL`

    These variables are used to connect to the Blade & Soul platform accounts, game data, and other services.

6. **Start the API Server**:

    Once everything is installed, you can start the server using the provided `Start_Api.bat` file or manually via:

    ```bash
    npm start
    ```

    The server will be accessible at `http://localhost:3000`.
	
7. **Admin Panel**:

    The admin panel for managing game-related data can be accessed via the following URL:

    ```bash
    http://<server_address>:3000/admin
    ```

    Replace `<server_address>` with the actual address of your server.

### Administrator Assignment and Permissions:

- **Initial Administrator Setup**:  
  The first web administrator is assigned directly in the database:

  **Database**: `PlatformAcctDb`  
  **Table**: `Users`  
  **Column**: `admin` (type: `bit`)  

  Set the value of the `admin` column to `1` for the corresponding user to grant them administrative privileges.

- **Adding New Administrators**:  
  Once the initial web administrator is assigned, they gain access to special features in the admin panel. This includes the ability to add or remove other administrators directly through the website, ensuring efficient and secure delegation of administrative tasks.

## API Endpoints

### User Management

- **GET /check-availability**: Checks if a username or email is available for registration.
    - Query parameters:
        - `account_name`: The desired username.
        - `email`: The user's email.
    
- **POST /signin**: Authenticates a user based on their email and password.
    - Body parameters:
        - `signin_email`: The user's email.
        - `signin_password`: The user's password.

### Admin Panel Management

- **GET /admin**: Provides access to the administrative panel, where the following information is displayed:
    - List of all users from the `PlatformAcctDb` database.
    - The total number of characters created in the game from the `BlGame01` database.
    - The total number of deleted characters from the game (`deletion = 1` in the `CreatureProperty` table).

### Profile Management

- **GET /profile**: Retrieves detailed profile information, including in-game character stats and settings.

### Character Management

- **POST /edit-character**: Allows users to edit character attributes such as:
    - Faction
    - Race
    - Job
    - In-game currency

### Deposit Management

- **POST /add-deposit**: Adds virtual currency to a user's account.

## Environment Variables

The `.env` file contains all the necessary configuration for running the server:

- **Server Configuration**:
    - `PORT`: The port on which the server will run (default: `3000`).
    - `LOG_TO_CONSOLE`: Whether to enable logging to console (`true` or `false`).

- **Database Configuration**:
    - `PLATFORM_ACCT_DB_USER`, `PLATFORM_ACCT_DB_PASSWORD`, `PLATFORM_ACCT_DB_SERVER`, `PLATFORM_ACCT_DB_DATABASE`: Credentials and details for the platform accounts database.
    - `BLGAME01_DB_USER`, `BLGAME01_DB_PASSWORD`, `BLGAME01_DB_SERVER`, `BLGAME01_DB_DATABASE`: Credentials for the in-game database (Blade & Soul).
    - `VIRTUAL_CURRENCY_DB_USER`, `VIRTUAL_CURRENCY_DB_PASSWORD`, `VIRTUAL_CURRENCY_DB_SERVER`, `VIRTUAL_CURRENCY_DB_DATABASE`: Database for managing virtual currency transactions.

## Dependencies

This project relies on the following npm packages:

- **express**: Web framework for building RESTful APIs.
- **mssql**: A library for connecting and querying Microsoft SQL Server.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **axios**: A promise-based HTTP client for making requests to external services.
- **cors**: Enables Cross-Origin Resource Sharing for allowing requests from different domains.
- **ejs**: Template engine for rendering dynamic HTML.
- **argon2** and **bcrypt**: Libraries for secure password hashing.
- **chalk**: Adds colorful output for logging and debugging.
- **express-session**: Manages user sessions.
- **mysql2**: MySQL database connection support.
- **bootstrap**: Frontend framework for building responsive websites.
- **os-utils**: Provides utility functions for monitoring system performance (e.g., CPU usage, memory).
- **pidusage**: Allows retrieving the CPU and memory usage of a specific process.
- **xml2js**: Converts XML data to JavaScript objects and vice versa.
- **marked**: A markdown parser and compiler.

## BnS Game Launcher

*Note: The game launcher for this server can be downloaded from [B&S Game Launcher](https://github.com/war100ck/blade-soul-game-launcher).*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Discussion on Blade & Soul Game API Server

For further information and discussions related to the **Blade & Soul Game API Server** and **Game Launcher**, visit the active discussion on the forum:

[Discussion on RageZone](https://forum.ragezone.com/threads/blade-soul-game-api-server-game-launcher.1234817/)

Here you will find project details, exchange of experiences, and solutions to various technical issues related to the setup and launch of the Blade & Soul API server.

...

## Blade & Soul Game API Server for 2020

If you are looking for the **Blade & Soul** Game API Server for the 2020 version, you can download it here:

[Download Blade & Soul Game API Server 2020](https://github.com/war100ck/BnS-Api-Server)


## Additions / Fixes

<details>
  <summary><b>Change Log: 04/10/2025</b></summary>

### 📧 Mail Monitoring
   - View sent mail between players
   - Search by username, character, or item ID
   - Display mail contents (items and gold)

### 🎁 In-Game Mail Monitoring
   - Track items in the Warehouse system
   - Filter by user and item ID
   - Manage item statuses (in mail, received, used)

### 🔧 Additional Features
   - Cache item database for fast search
   - Delete items from in-game mail
   - Automatic cache updates every 5 minutes
   - Visual indicators for item statuses and types

## Technical Details
   - Support for multiple databases (GameItemsDB, BlGame01, GameWarehouseDB)
   - Optimized SQL queries with JOINs between tables
   - Asynchronous data processing
---
⚠️ **Note:** To ensure updates work properly, a restart of the BNS API is required.

---
</details>

<details>
  <summary><b>Change Log: 30/08/2025</b></summary>

  1. **Added new functionality in BNS API**:  
     - Promo Issue Management (create and manage campaigns)  
     - Coupon Generation (bulk/single codes)  
     - Reward System (multiple rewards per campaign)  
     - User Redemption (simple coupon redemption)  
     - Activation Tracking (monitor coupon usage)  
     - Admin Dashboard (statistics, activity, quick actions, CRUD)  
     - Advanced Features (search, bulk ops, expiration, usage limits, reset)  
     - 📬 Rewards after activation are automatically delivered to in-game mail  

  ⚙️ **Important:** After updating via the web interface, make sure to run **`install.bat`** to install dependencies and apply changes.
</details>

<details>
  <summary><b>Change Log: 12/08/2025</b></summary>

  1. **Added character blocking functionality**:  
     Implemented a system for temporary and permanent character bans with recorded reasons and durations.  
     Administrators can now effectively prevent rule violations, ensuring a fair and secure gaming environment.
     
</details>

<details>
  <summary><b>Change Log: 03/08/2025</b></summary>

  Added new route for server role management:  
  Implemented a REST endpoint for assigning roles to users via the API. This feature enables administrators to manage user permissions more efficiently, integrating role control directly into the admin interface.
</details>

<details>
  <summary><b>Change Log: 13/07/2025</b></summary>

  > ⚠️ **Critical Update Notice**  
  > <p style="font-weight: bold; font-style: italic; color: #FF6347;">This update introduces fundamental architectural changes across the system.  
  > File names and folder structures have been significantly reorganized.  
  > **It is strongly recommended to perform a clean reinstallation** by cloning the latest version directly from the official GitHub repository.  
  > Continuing with a previously installed version may result in conflicts due to outdated or relocated files.</p>

  ---

  ### 1. New "API Configuration" Section
  A new category has been added to the admin panel, allowing real-time management of `.env` parameters through the web interface. Features include:
  - Sections: **Server Configuration**, **Database Configurations**, and **Registration Log**
  - Automatic backup of the `.env` file upon any change
  - Ability to restart the API server directly from the interface

  ### 2. Server Processes Category
  Provides tools for managing server-side daemons and individual background processes.  
  Administrators can start, stop, and monitor processes via the admin panel.

  ### 3. News Editor Module
  Introduces a user-friendly editor for managing and publishing news on the website's main page.  
  All content is controlled from the admin panel.

  ### 4. Promotions System
  Adds a system to manage promotional in-game events:
  - Manual start/stop of the **Daily Dash** (daily login reward)
  - Optional auto-renewal configuration

  ### 5. Updated Server API Updater
  Before applying any API updates via the web interface, the system now automatically backs up all affected files, allowing for safe rollback.

  ### 6. Discord Bot Integration
  Introduces automated integration with Discord:
  - Periodically sends server monitoring data to a specified Discord channel (interval configurable)
  - Supports the `/online` command in chat to view the current online player count  
  *(Requires bot creation at [Discord Developer Portal](https://discord.com/developers/applications/))*

  ### 7. Info Modals on All Pages
  Adds context-sensitive informational modals to each admin panel page for quick reference and improved user onboarding.

  ### 8. Fully Redesigned Admin Panel Interface
  The admin UI has been completely rebuilt with:
  - A refreshed design
  - Improved responsiveness and performance
  - Enhanced UX and removal of outdated components
  
   ### 9. Minor code tweaks and adjustments:  
   Made small improvements and optimizations to enhance code stability and readability.

  ---

  ### ⚙️ Important Notes
  - Before starting the server, run **`Install.bat`** to install dependencies and initialize the database.
  - Restart the API server after updating to apply all changes.
  - A clean installation is **strongly recommended** to prevent legacy file conflicts.
</details>

<details>
  <summary><b>Change Log: 14/02/2025</b></summary>

  1. **Added a donation-based store to the user profile**:  
     Users can now purchase **velirs** using donations. The "donations" tab is located in the dropdown menu of the navigation panel in the user's profile.

  2. **Added a section to the Admin Panel for adding and editing products (velirs)**:  
     Admins can now manage the store's inventory, including adding and editing velirs.

  3. **The donation store works exclusively with velirs**:  
     Only velirs are available for purchase, and no other products should be listed.

  4. **Payment systems are not yet integrated**:  
     Currently, the store functionality is available, but payment processing has not been implemented.

  5. **Significant code revisions**:  
     Major optimizations and improvements were made to enhance the stability and performance of the system.

</details>

<details>
  <summary><b>Change Log: 27/01/2025</b></summary>

  1. Added update management for B&S Server API:
     Implemented a system to check for updates directly from the project's GitHub repository. The feature allows administrators to download the latest updates and perform automatic installations seamlessly, ensuring the B&S Server API remains up-to-date with minimal effort.

  2. **Minor code tweaks and adjustments**:  
     Made small improvements and optimizations to enhance code stability and readability.

</details>

<details>
  <summary><b>Change Log: 22/1/2025</b></summary>

  1. **Added item management and distribution**:  
     Added the ability to search for items by ItemID in the database and send them to characters on user accounts via the admin panel.

  2. **Added account blocking and player exclusion**:  
     Introduced the ability to apply temporary or permanent account bans and quickly remove players from the server.

  3. **Added VIP privileges management**:  
     Simplified the process of managing and assigning VIP privileges to users via the admin panel, granting access to premium content and special in-game advantages for VIP players.
	 
  4. **Added game server monitoring**:  
     Implemented real-time server monitoring, providing detailed information on the number of players online and their activity.

  5. **Added game server statistics**:  
     Game statistics with charts displaying the number of registered accounts, including breakdowns by character race, gender, class, faction, and level, along with additional insights and data for administrators.
	
  6. **Added VIP status display in user profiles**:  
     Updated the player's account profile page on the website to include detailed information about VIP privileges, such as the current VIP rank, status, and expiration date.

  7. **Added avatar selection for user profiles**:  
     Introduced the ability for users to choose their avatar from a selection of 16 available options, enhancing personalization on the account profile page.

  8. **Minor code tweaks and adjustments**:  
     Made small improvements and optimizations to enhance code stability and readability.

     [Watch the update video on YouTube](https://youtu.be/LbAH0uluWvA?si=b6ft_EsowibnM5s8)
     
</details>

<details>
  <summary><b>Change Log: 13/11/2024</b></summary>

  1. **Added authentication for accessing the admin panel**:  
     Implemented a credential verification system to ensure that only authorized administrators can access the admin panel.

  2. **Added a navigation panel to the Admin Panel**:  
     Introduced a navigation bar to improve usability, providing quick access to key sections of the admin panel.

  3. **Minor code tweaks and adjustments**:  
     Made small improvements and optimizations to enhance code stability and readability.

</details>

