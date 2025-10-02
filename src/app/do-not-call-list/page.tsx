export default function DoNotCallListPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Do Not Call List
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
          <p>
            At <span className="font-bold">State Wide Chimney</span>, we respect
            and honor all Do Not Call (DNC) requests.
          </p>

          <p>If you wish to be removed from our contact lists:</p>

          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <span role="img" aria-label="email">
                📧
              </span>
              <span>
                Email us at:{" "}
                <a
                  href="mailto:info@statewidechimney.com"
                  className="text-red-600 font-semibold hover:underline"
                >
                  info@statewidechimney.com
                </a>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <span role="img" aria-label="phone">
                📞
              </span>
              <span>
                Call us at:{" "}
                <a
                  href="tel:8887744288"
                  className="font-bold text-gray-900 hover:underline"
                >
                  (888) 774-4288
                </a>
              </span>
            </li>
          </ul>

          <p className="text-gray-600">
            Please allow up to 10 business days to process your request. Even if
            your number is listed on the National DNC Registry, you may still
            receive calls from us if you have previously provided consent —
            which you may revoke at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
