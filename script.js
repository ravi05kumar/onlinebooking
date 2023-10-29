document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const checkin = formData.get("checkin");
    const checkout = formData.get("checkout");
    const roomType = formData.get("roomType");
    const specialRequests = formData.get("specialRequests");

    // You can process the form data here, e.g., send it to a server or store it in a database
    // For a more complete system, you would typically use a server-side language and database.

    alert("Booking Successful!\nName: " + name + "\nCheck-in Date: " + checkin + "\nCheck-out Date: " + checkout + "\nRoom Type: " + roomType + "\nSpecial Requests: " + specialRequests);
});