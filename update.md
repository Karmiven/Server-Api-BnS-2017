
<h3>Update Log</h3>

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

  <p style="font-style: italic; color: #FF6347;">Before running the server, please make sure to run <b>Install.bat</b> to ensure that all necessary dependencies and database setup are completed.</p>

  <p style="font-style: italic; color: #FF6347;">After the update, please restart the API server for the changes to take effect.</p>

  <p style="font-style: italic; color: #FF6347;">It is recommended to perform a fresh installation from the beginning, as there have been significant changes, and some unused files may remain. However, this will not affect the functionality of the system.</p>

  <p style="font-style: italic; color: #FF6347;">Additionally, make sure to restore the database <b>DonationsDb.bak</b> from the <b>DB\</b> folder to ensure that all data is correctly populated.</p>

</details>

<details>
  <summary><b>Change Log: 05/02/2025</b></summary>

  1. Fixed connection to LobbyDB database.  
  2. *Run `install.bat` to create the LobbyDB connection entry in the `.env` file.*  
  3. *Launch `Start_Api.bat` to start the API.*  
  
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
