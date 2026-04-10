import { Locator, Page } from "@playwright/test";
import { CommonLib } from "../Utils/CommonPlaywrightWrapper";

export class CreditCardPage extends CommonLib {
  private readonly fullNameInput: Locator;
  private readonly emailInput: Locator;
  private readonly phoneInput: Locator;
  private readonly addressTextarea: Locator;
  private readonly accountNumberInput: Locator;
  private readonly cardTypeSelect: Locator;
  private readonly proofUploadInput: Locator;
  private readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.fullNameInput = page.locator("#name");
    this.emailInput = page.locator("#email");
    this.phoneInput = page.locator("#phone");
    this.addressTextarea = page.locator("#address");
    this.accountNumberInput = page.locator("#accountNumber");
    this.cardTypeSelect = page.locator("#cardType");
    this.proofUploadInput = page.locator("#proof");
    this.submitButton = page.getByText("Apply for Debit Card", { exact: true });
  }

  async fillCreditCardApplication(
    fullName: string,
    email: string,
    phone: string,
    address: string,
    accountNumber: string,
    cardType: string,
    proofFilePath: string
  ) {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.addressTextarea.fill(address);
    await this.accountNumberInput.fill(accountNumber);
    await this.cardTypeSelect.selectOption(cardType);
    await this.proofUploadInput.setInputFiles(proofFilePath);
  }

  async submitApplication() {
    await this.waitAndClick(this.submitButton);
  }
}
