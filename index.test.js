 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }


// Show how to write a basic test
  test('Should run', () => {
    expect(2).toBe(2)
  })

// Show that we can access our fake data above
  test("First name should be Patten", () => {
    expect(testData.firstName).toBe("Patten")
  })

// Tests the functinns that are being used in our page
  describe("formatTitle tests", () => {
    test("formatTitle should return a string", () => {
      let formattedTitle = formatTitle(testData.title)
      expect(typeof formattedTitle).toBe("string")
    })
    // formattedTitle exists only in its own local scope, so can use same
    test("formatTitle should format title correctly", () => {
      let formattedTitle = formatTitle(testData.title)
      expect(formattedTitle).toBe("Nulla Ac")
      // Format title function makes it uppercase
    })
  })

  describe("shortenBio", () => {
    test("shotenBio should shorten the bio string", () => {
      let shortBio = shortenBio(testData.bio)
      expect(shortBio.length).toBeLessThan(testData.bio.length)
      // .length makes it count the numbers of Chars including whitespaces to compare length of each string
    })
    test("shorternBio should add peiods to the end of the strings", () => {
      let shortBio = shortenBio(testData.bio)
      expect(shortBio).toContain("...")
    })
  })


  test("Testing toBe vs. toEqual", () => {
    const myObj = {myNum: 4}
    const myObjTwo = {myNum: 4}
    expect(myObj).toEqual(myObjTwo)
  })

  test("Testing toBe vs. toEqual one more time", () => {
    const myObj = {myNum: 4}
    const myObjTwo = {myNum: 4}
    expect(myObj).toBe(myObjTwo)
  })
  // This one spits an error, while toEqual passes


// toBe vs. toEqual = toBe checks for primitive value type. Numbers, strings, and booleans are PRIMITIVE types, everything else is REFERNCE type. Objects are not primitive, so toBe is false because it's checking for