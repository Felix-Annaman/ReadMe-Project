# ReadMe-Project
This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. The application is designed to help developers quickly create a high-quality, professional README for a new project.

## User Story

As a developer, I want a README generator so that I can quickly create a professional README for a new project.

## Acceptance Criteria

The application is a command-line application that accepts user input. When a user is prompted for information about the application repository, a high-quality, professional README.md is generated with the following sections:

- Title: The title of the user's project.
- Description: A brief description of the project.
- Table of Contents: Links to each of the other sections in the README.
- Installation: Instructions for installing and running the project.
- Usage: Instructions for using the project, including any relevant screenshots or examples.
- License: Information about the license under which the project is released, including a badge for the chosen license.
- Contributing: Guidelines for contributing to the project.
- Tests: Instructions for running tests on the project.
- Questions: The user's GitHub username and email address, along with instructions for how to contact them with additional questions.

When a user chooses a license for their project, the application automatically generates a badge for that license and includes a notice in the License section that explains which license the project is covered under.

In addition to generating the README file, the application also requires the user to create a walkthrough video that demonstrates the functionality of the application. The user can use a screen recording tool like Loom or QuickTime to record the video, and then upload it to a video hosting platform like YouTube or Vimeo. The link to the video should be included in the README file.

## Installation

To install the application, simply clone the repository to your local machine and run `npm install` to install the required dependencies.

## Usage

To use the application, navigate to the root directory of the project and run `node index.js`. Follow the prompts to enter information about your project, and the application will generate a README file in the same directory.

## License

This project is licensed under the MIT license.

## Contributing

Contributions to this project are welcome! To contribute, please fork the repository and submit a pull request.

## Tests

To run tests on the project, run `npm test` in the root directory of the project. This will run all of the tests in the `test` directory and output the results to the console.

## Questions

If you have any questions or concerns about the application, please feel free to contact the author at [author's email address]. You can also find more information about the author and their other projects on their GitHub profile: [author's GitHub profile link].

Thank you for using the README Generator! We hope it helps you create high-quality, professional README files for all of your projects.
