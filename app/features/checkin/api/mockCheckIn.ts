export interface CheckInState {
  lastEvent?: string;
  lastStatus?: "success" | "error";
  lastMessage?: string;
}

export function simulateCheckIn(signatureMode: "wallet" | "qrcode"): CheckInState {
  if (signatureMode === "wallet") {
    return {
      lastEvent: "OM vs PSG",
      lastStatus: "success",
      lastMessage: "Signature EIP-712 vérifiée (mock).",
    };
  }
  return {
    lastEvent: "OM vs PSG",
    lastStatus: "error",
    lastMessage: "QR code invalide ou expiré (mock).",
  };
}
