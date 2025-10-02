export default function CaliforniaPrivacyNoticePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          California Privacy Notice
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Intro */}
          <p className="text-gray-700">
            If you are a California resident, you have the following rights
            under the <strong>California Consumer Privacy Act (CCPA):</strong>
          </p>

          {/* Rights */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              YOUR RIGHTS
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Right to Know</strong> – You have the right to know what
                personal information we collect and how we use it.
              </li>
              <li>
                <strong>Right to Delete</strong> – You may request the deletion
                of your personal information.
              </li>
              <li>
                <strong>Right to Opt Out</strong> – You may opt out of the sale
                or sharing of your personal data.
              </li>
              <li>
                <strong>Right to Non-Discrimination</strong> – We will not
                discriminate against you for exercising your privacy rights.
              </li>
            </ul>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              HOW WE COLLECT DATA
            </h2>
            <p className="text-gray-700">
              We collect personal information such as your{" "}
              <strong>
                name, phone number, email address, ZIP code, service location,
                and details related to your chimney sweep or repair service
                needs.
              </strong>{" "}
              This information may be shared with licensed chimney technicians
              in our network to help fulfill your service request.
            </p>
          </section>

          {/* Exercising Rights */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              EXERCISING YOUR RIGHTS
            </h2>
            <p className="text-gray-700 mb-4">
              To submit a CCPA request, please contact us:
            </p>
            <p className="flex items-center space-x-2 text-red-600 font-semibold">
              📧{" "}
              <a
                href="mailto:info@statewidechimney.com"
                className="hover:underline"
              >
                info@statewidechimney.com
              </a>
            </p>
          </section>

          {/* Footer note */}
          <p className="text-gray-600">
            For more details, please review our Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
