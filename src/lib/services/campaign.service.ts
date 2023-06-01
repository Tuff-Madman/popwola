import api from "@/appwrite/appwrite";
import { Permission, Role } from "appwrite";
import { userId } from "../storage";
import { CampaignInterface } from "@/interfaces/campaign.interface";

export const getAllCampaigns = async (): Promise<{
  total: number;
  documents: CampaignInterface[];
}> => {
  return await api.getDocuments(process.env.NEXT_PUBLIC_CAMPAIGN_COLLECTION_ID);
};

export const createCampaignDocument = async (
  campaignData: CampaignInterface
): Promise<CampaignInterface> => {
  return api.createDocument(
    process.env.NEXT_PUBLIC_CAMPAIGN_COLLECTION_ID,
    campaignData,
    [
      Permission.read(Role.user(userId())),
      Permission.write(Role.user(userId())),
    ]
  );
};