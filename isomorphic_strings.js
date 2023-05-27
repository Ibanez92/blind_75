// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// Input for isIsomorphic function, s and t parameter
const s = "egg"
const t = "add"

const isIsomorphic = (s, t) => { // Edge case: for different length of two strings...
    if (s.length != t.length) 
        return false;
    

    const map = new Map()
    const values = []

    for (let i = 0; i < s.length; i++) {
        if (t[i] === map.get(s[i])) {
            continue;
        }
        if (map.get(s[i]) && t[i] !== map.get(s[i])) {
            return console.log(false);
        }
        if (! map.get(s[i])) {
            if (values.includes(t[i])) {
                return console.log(false);
            }
            map.set(s[i], t[i])
            values.push(t[i])
            continue;
        }

    }

    return console.log(true);

};

isIsomorphic(s, t)
