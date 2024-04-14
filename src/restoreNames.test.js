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

  it('sets correct first names for users with firstName as undefined', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
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

  it('should handle users without fullName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);
    expect(users[0].firstName).toBe(undefined);
    expect(users[1].firstName).toBe('Mike');
  });
});
