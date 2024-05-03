import React from "react";
import { Container } from "../components/Container";

function initAnalyticsService() {
  // Initialize the analytics service
  return AnalyticsService.init();
}

let pageViews = 0;

class AnalyticsService {
  static init() {
    return new AnalyticsService();
  }

  private constructor() {}

  trackPageView(data: unknown) {
    pageViews++;
    console.log("track page view", data);
  }
}

// This runs as soon as the file is imported
const analytics = initAnalyticsService();

export function AnalyticsExample4() {
  React.useEffect(() => {
    analytics.trackPageView({ path: window.location.pathname });
  }, []);

  return (
    <Container title="Esempio analytics">
      <p>Page views: {pageViews}</p>
    </Container>
  );
}
