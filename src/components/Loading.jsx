const Loading = (props) => (
    <div className="loading-svg-container">
        <svg className="loading-svg-spinner" {...props} width="100" height="100" viewBox="0 0 44 44"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#3B82F6"></stop><stop offset="100%" stop-color="#60A5FA"></stop></linearGradient></defs><circle cx="22" cy="22" r="20" fill="#ffffff" stroke="#C197F5" strokeWidth="4" strokeLinecap="round"><animateTransform attributeName="transform" type="rotate" from="0 22 22" to="360 22 22" dur="0.8333333333333334s" repeatCount="indefinite"></animateTransform></circle></svg>
        <style>
            {`
            .loading-svg-container {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 120px;
                width: 100%;
            }
            .loading-svg-spinner {
                display: block;
                margin: 0 auto;
                background: transparent;
            }
            `}
        </style>
    </div>
);


export default Loading;