describe('My First Test', () => {
    it('Success visit',()=>{
        cy.viewport(474, 642)   
        cy.visit('https://server13.yesdok.com/id/waitlist/dexa/')
        cy.contains('Antrian YesVision')
        
        //isi data nama, no wahtsapp, dan email
        cy.get('#txtname').type('rigen radipan12')
        cy.get('#txtwhatsapp').type('08111111113')
        cy.get('#txtemail').type('rigen.bisa13@mailinator.com')
        
        // pilih tanggal lahir 
        cy.contains('Tanggal Lahir')
        //cy.get('#cbday').click()
        cy.get('#cbday').select('5')
        cy.get('#cbday').should('have.value', '5')

        //submit button lanjutkan 
        cy.get('#btnSubmit').click()

        //masukan kode promo
        cy.contains('Kode Promo')
        cy.get('#txtPromoCode').type('mfest')
        cy.get('#btnUsePromo').click()
        
        //pilih metode pembayaran 
        cy.contains('Tunai')
        cy.get('#frmPayment > div.row > div > div:nth-child(2) > div:nth-child(3) > input').click()
        
        //click untuk lanjutkan membayar
        cy.contains('Lanjut Bayar')
        cy.get('#btnPayNow').click()
    })
})