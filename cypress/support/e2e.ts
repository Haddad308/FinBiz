describe("Comments Page", () => {
  beforeEach(() => {
    // Assuming your development server runs on localhost:3000
    cy.visit("http://localhost:3000/en/comments");
    cy.wait(2000); // Wait for 2 seconds (adjust the time as needed)
  });

  it("should load the comments page", () => {
    cy.get("h1").contains("Comments").should("exist");
  });

  it("should display the comments", () => {
    cy.get(".comment").should("have.length.greaterThan", 0); // Assuming comments have a class 'comment'
  });

  it("should add a new comment", () => {
    const newComment = "This is a test comment";
    cy.get('textarea[name="body"]').type(newComment);
    cy.get('button[type="submit"]').click();

    cy.get(".comment").contains(newComment).should("exist");
  });

  it("should paginate comments", () => {
    // Assuming pagination controls have class 'pagination'
    cy.get(".pagination button").contains("2").click();
    cy.url().should("include", "?page=2");
    cy.get(".comment").should("have.length.greaterThan", 0);
  });
});
