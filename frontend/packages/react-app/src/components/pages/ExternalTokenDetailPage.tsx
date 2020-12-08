import React, { useEffect, useCallback, useReducer } from "react";
import { RouteComponentProps } from "react-router-dom";
import { tokenReducer } from "../../reducers/token";
import { campaignReducer } from "../../reducers/campaign";
import { GET_CAMPAIGNS } from "../../graphql/subgraph";
import { useLazyQuery } from "@apollo/react-hooks";
import { CampaignInfo } from "../../interfaces";
import ExternalTokenDetailPageTemplate from "../templates/ExternalTokenDetailPageTemplate";
import { useWeb3React } from "@web3-react/core";

const tokenInitialState = {
  token: {
    name: "",
    tokenAddress: "",
  },
};

const campaignsInitialState = new Array<CampaignInfo>();

const ExternalTokenDetailPage: React.FC<RouteComponentProps<{
  tokenAddress: string;
}>> = (props) => {
  const { active } = useWeb3React();
  const tokenAddress = props.match.params.tokenAddress;
  const [tokenState, tokenDispatch] = useReducer(
    tokenReducer,
    tokenInitialState
  );
  const [campaignsState, campaignDispatch] = useReducer(
    campaignReducer,
    campaignsInitialState
  );
  const [getCampaigns, { data }] = useLazyQuery(GET_CAMPAIGNS);

  const getLocalToken = useCallback(() => {
    tokenDispatch({
      type: "token:getLocal",
      payload: { tokenAddress: tokenAddress },
    });
  }, [tokenAddress]);

  const getCampaignMetadata = useCallback(async (campaigns) => {
    for (let i = 0; i < campaigns.length; i++) {
      const cid = campaigns[i].campaignInfoCid;
      const url = `https://cloudflare-ipfs.com/ipfs/${cid}`;
      const response = await fetch(url);
      campaigns[i].campaignMetadata = await response.json();
    }
    campaignDispatch({
      type: "campaignMetadata:set",
      payload: { data: campaigns },
    });
  }, []);

  useEffect(() => {
    getLocalToken();
  }, [getLocalToken]);

  useEffect(() => {
    // TODO: After made campaign creation function, change dinamic value
    getCampaigns({
      variables: {
        creator: "0x84d800dae0bdb31a4de9918782bffcc8d041c1b8",
        token: tokenAddress.toLowerCase(),
      },
    });
  }, [tokenAddress, tokenState, getCampaigns]);

  useEffect(() => {
    if (data !== undefined) {
      campaignDispatch({
        type: "campaign:get",
        payload: { data: data.campaigns },
      });
    }
  }, [tokenAddress, data]);

  useEffect(() => {
    if (campaignsState.length > 0) {
      getCampaignMetadata(campaignsState);
    }
  }, [campaignsState, getCampaignMetadata]);

  return (
    <>
      <ExternalTokenDetailPageTemplate
        active={active}
        tokenState={tokenState}
        campaignsState={campaignsState}
      />
    </>
  );
};

export default ExternalTokenDetailPage;
