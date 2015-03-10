# PTO

A PTO Time Tracking App

## Outline

* My profile
  * Settings
    * PTO Day in Hours (default)
    * Hours Accrued
      * Bimonthly
      * Monthly
      * Annually
      * Other?
    * Company Holidays
      * US
      * Canada
* Time Off Calendar
* Time Off Request
  * Full Day | Half Day
  * PTO | Jury Duty | Bereavement | Military Duty 
* Hours (in hours and days)
  * Available
  * Submitted
  * Approved
  * Taken

## Models

* User
  * Basic Info
    * Name
    * Company
    * Email
  * PTO
    * Hours 
      * Accrued
      * Available
      * Submitted
      * Approved
      * Taken
    * Holidays

* Calendar
  * Request
    * Full Day | Half Day
    * PTO | Jury Duty | Bereavement | Military Duty 

## Installation

To use this project as is, first clone the repo from GitHub, then run:

```bash
$ cd pto-ionic
$ sudo npm install -g cordova ionic gulp
$ npm install
$ gulp install
```

## Updating Ionic

To update to a new version of Ionic, open bower.json and change the version listed there.

For example, to update from version `1.0.0-beta.4` to `1.0.0-beta.5`, open bower.json and change this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.4"
```

To this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.5"
```

After saving the update to bower.json file, run `gulp install`.

Alternatively, install bower globally with `npm install -g bower` and run `bower install`.


## Running the App

XCode

```bash
$ cd pto-ionic
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```
Localhost

```bash
$ cd pto-ionic
$ ionic platform add ios
$ ionic build ios
$ ionic serve
```
