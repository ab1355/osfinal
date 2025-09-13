export class RealtimeSync {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectInterval = 5000; // 5 seconds

  constructor() {
    this.connect();
  }

  private connect() {
    const wsUrl = process.env.NEXT_PUBLIC_QUESTFLOW_WS_URL;
    if (!wsUrl) {
      console.error("WebSocket URL is not defined in environment variables.");
      return;
    }

    console.log("Attempting to connect to WebSocket server...");
    this.ws = new WebSocket(wsUrl);

    this.ws.onopen = () => {
      console.log("WebSocket connection established.");
      this.reconnectAttempts = 0; // Reset reconnect attempts on successful connection
    };

    this.ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("WebSocket message received:", data);
        // Broadcast the event to any interested listeners
        document.dispatchEvent(new CustomEvent('questflow-message', { detail: data }));
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    this.ws.onclose = () => {
      console.log("WebSocket connection closed.");
      this.handleReconnect();
    };

    this.ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      this.ws?.close(); // Close the WebSocket to trigger the onclose event and handle reconnection
    };
  }

  private handleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Attempting to reconnect in ${this.reconnectInterval / 1000} seconds... (Attempt ${this.reconnectAttempts})`);
      setTimeout(() => this.connect(), this.reconnectInterval);
    } else {
      console.error("Maximum WebSocket reconnect attempts reached.");
    }
  }

  public close() {
    if (this.ws) {
      this.ws.close();
    }
  }
}
