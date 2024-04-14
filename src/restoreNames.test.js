'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be a function', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it('should handle empty user array', () => {
    const users = [];

    restoreNames(users);
    expect(users.length).toBe(0);
  });

  it('should set correct first names when firstName is undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
  });

  it('should set correct first names when firstName is omitted', () => {
    const users = [
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Mike');
  });

  it('does not modify first names for users with firstName already set', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        fullName: 'John Doe',
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        fullName: 'Alice Smith',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Alice');
  });
});
