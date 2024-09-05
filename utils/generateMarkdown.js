// TODO: Create a function that returns a license badge based on which license is passed in
import { makeBadge, ValidationError } from 'badge-maker';
// If there is no license, return an empty string
let license;
export function renderLicenseBadge(license) {
  if (license) {
    return `https://shields.io/${license}`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
export function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
export function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description\n${data.description}
  ## Table of Contents
  []
  ## Installation\n${data.install}
  ## Usage\n${data.usage}
  ## Credits\n${data.credits}
  ## License\n${data.license}
  ## Badges\n${data.badges}
  ## Features\n${data.features}
  ## Contribute\n${data.contribute}
  ## Tests\n${data.tests}`;
}

export default generateMarkdown;