class Index extends React.Component {
  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("service worker registration successful", registration);
        })
        .catch((err) => {
          console.warn("service worker registration failed", err.message);
        });
    }
  }

  render() {
    return (
      <div>
        <h1>asdasdas sdfasd asdf asd asfd asd asd</h1>
      </div>
    );
  }
}

export default Index;
