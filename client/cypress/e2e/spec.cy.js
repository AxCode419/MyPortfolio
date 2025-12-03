describe('template spec', () => {
  it('passes', () => {
    describe("My Portfolio E2E Test", () => {
      it("Loads the homepage and navigates to Projects page", () => {
        // Visit your Vite app
        cy.visit("http://localhost:5173/");
            
        // Check if homepage content is visible
        cy.contains("Welcome to My Portfolio").should("exist");
            
        // Click on Projects in the navigation
        cy.contains("Projects").click();
            
        // URL should include /projects
        cy.url().should("include", "/projects");
            
        // Check content on Projects page
        cy.contains("Projects").should("exist");
      });
    });
    
  })
})