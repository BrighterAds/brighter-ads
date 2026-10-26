# Brighter Ads — Publication checklist

Website changes are prepared in the local folder. The public site will update after the changes are committed, pushed, and successfully deployed through GitHub Pages.

## Information to complete

- Confirm the official names of the business owner and publication director, the address, SIRET number, and applicable business registration. Add the business phone number to `legal-notice.html`, along with the VAT number if applicable.
- Verify the current contact details for GitHub, Inc. and add the hosting provider's phone number to `legal-notice.html` using an official source.
- Confirm which Google accounts are actually used and the corresponding data transfer safeguards. The policy describes the services visible on the website; it does not verify account contracts or settings.
- Apply the stated 12-month retention period to Forms responses, any linked response spreadsheets, and prospecting correspondence and archives, subject to the exceptions described in the policy.
- Optional: provide Giusy's LinkedIn URL and approved professional references or testimonials.

## Google Forms

- Rename the external form to "Contact Brighter Ads" and add a link to `https://brighterads.com/privacy-policy.html` in its description, along with information about how the data is used.
- Add "Data Analytics" and, if desired, "Growth Strategy" / "Other" to the Google form choices. Then add options with exactly the same values to the `contactTopic` selector in `index.html`. The website retains the three values already accepted by the form; the email link already supports analytics enquiries and other topics.
- Confirm that the form accepts responses without a Google account and that new response notifications are enabled for the correct recipient.
- Send a real test message from the website and check the confirmation, all five fields received in Forms, and the notification. Also check the external fallback form.

## Google Calendar

- Check the time zone, availability, and minimum booking notice of 48 hours in the appointment schedule.
- Make a test booking and check the confirmation emails, Meet link, and cancellation and rescheduling links.

## Deployment and final checks

- Deploy using the GitHub Pages Jekyll build so that `_config.yml` is applied. If another system publishes the raw files, apply the same exclusion list there.
- After deployment, check that `/index_backup.html` and `/index_full.html` no longer serve the old pages and that the custom 404 page appears for an unknown URL.
- Check the form, FAQ, and menu on a real phone, especially at widths of 320–390 px. Check navigation back to the website from the legal pages and the 404 page.
- Check URL sharing on LinkedIn (refresh its preview if necessary) and confirm that `/images/social-preview.png` loads.
- Check that `css/fonts.css` and the files in `fonts/` are included in the commit, along with their licences.
