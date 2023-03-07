const Billing = () => {
  return (
    <form className="billing-form">
      <label htmlFor="address">Street Address</label>
      <input type="text" name="address" required/>

      <label htmlFor="unit">Apt, Suite, Unit Number(Optional)</label>
      <input type="text" name="unit"/>

      <label htmlFor="unit">City /Town</label>
      <input type="text" name="city" required/>

      <label htmlFor="Country">Country</label>
      <select name="country" required>
        <option value="Select a country">Select a country</option>
        <option value="Canada">Canada</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="province">Country</label>
      <select name="province" className="province-select" required>
        <option value="Select a province">Select a state or province</option>
        <option value="Ontario">Ontario</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="zip">Zip /Postal code</label>
      <input type="text" name="zip" required/>

      <label htmlFor="phone">Phone number</label>
      <input type="text" name="phone" required/>

      <label htmlFor="email">Email receipt to</label>
      <input type="text" name="email" required/>
      <input type="checkbox" name="terms" value="true" required/>

      <label htmlFor="terms">I agree to <span className="underline">terms& conditions</span></label>
      <input type="submit" required/>
    </form>
  )
}

export default Billing;
