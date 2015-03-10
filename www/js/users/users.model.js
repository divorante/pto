angular.module('pto.models.users', [
  // dependencies
])
  .factory('Users', function() {
    var users = [
      { 
        id: 111,
        name: 'Raleigh Froeber',
        company: 'Infor',
        email: 'Raleigh.Froeber@infor.com',
        pto: {
          rate: 13.34,
          accrue: 'monthly',
          total: 72.08,
          balance: 64.08,
          submitted: 0,
          approved: 32,
          taken: 8,
        },
        holidays: {
          country: 'US',
          selected: {
            'New Year\'s Day': true,
            'Martin Luther King Day': true,
            'President\'s Day': false,
            'Memorial Day': true,
            'Independence Day': true,
            'Labor Day': true,
            'Columbus Day': false,
            'Veterans Day': true,
            'Thanksgiving': true,
            'Christmas': true
          }
        }
      },{ 
        id: 222,
        name: 'Brittain Lewis III',
        company: 'Cyrus',
        email: 'Britt.Lewis@cyrus.com',
        pto: {
          rate: 10,
          accrue: 'monthly',
          total: 60,
          balance: 52,
          submitted: 0,
          approved: 8,
          taken: 8,
        },
        holidays: {
          country: 'US',
          selected: {
            'New Year\'s Day': true,
            'Martin Luther King Day': true,
            'President\'s Day': true,
            'Memorial Day': true,
            'Independence Day': true,
            'Labor Day': true,
            'Columbus Day': true,
            'Veterans Day': true,
            'Thanksgiving': true,
            'Christmas': true
          }
        }
      },{ 
        id: 333,
        name: 'Gellena Lukats',
        company: 'WeWork',
        email: 'Gellena.Lukats@wework.com',
        pto: {
          rate: 10,
          accrue: 'monthly',
          total: 50,
          balance: 28,
          submitted: 0,
          approved: 32,
          taken: 24,
        },
        holidays: {
          country: 'US',
          selected: {
            'New Year\'s Day': true,
            'Martin Luther King Day': false,
            'President\'s Day': false,
            'Memorial Day': true,
            'Independence Day': true,
            'Labor Day': true,
            'Columbus Day': false,
            'Veterans Day': false,
            'Thanksgiving': true,
            'Christmas': true
          }
        }
      }
    ];

    return {
      all: function() {
        return users;
      },
      get: function(userIndex) {
        return users[userIndex];
      }
    }
  });
