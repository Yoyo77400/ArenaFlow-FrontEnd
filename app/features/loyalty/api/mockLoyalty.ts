export interface LoyaltyInfo {
  address: string;
  balance: number;
  pendingPoints: number;
  lastUpdated: string;
}

export const mockLoyalty: LoyaltyInfo = {
  address: "0x1234...ABCD",
  balance: 4200,
  pendingPoints: 180,
  lastUpdated: "il y a 3 heures",
};
