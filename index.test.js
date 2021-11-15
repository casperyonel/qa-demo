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
  })