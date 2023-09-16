import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import axios from "axios";

import { Company } from "../../Types/types";

import {
  StyledCompanyDetailPageContainer,
  StyledCompanyDetailedHeader,
  StyledErrorMessage,
  StyledCompanyLogoBox,
  StyledCompanyNameBox,
  StyledCompanyDetailDescContainer,
  StyledShortInfoBox,
  StyledPostTimeAndContractBox,
  StyledCompanyHugeNameBox,
  StyledCompanyLocationBox,
  StyledLargeDescBox,
  StyledRequirementsBox,
  StyledUl,
} from "./CompanyDetailPage.css";
import {
  StyledButtonMain,
  StyledButtonSecondary,
} from "../_shared/ButtonsAndMisc.css";

export const CompanyDetailPage = () => {
  const toMainPage = useNavigate();

  const [companyData, setCompanyData] = useState<Company>(null);

  const findCompanyById = (data: any, companyId: string) => {
    return data.find((company: any) => company.id === parseInt(companyId));
  };

  useEffect(() => {
    const companyIdFromLocalStorage = localStorage.getItem("CompanyID");

    if (companyIdFromLocalStorage !== null) {
      axios.get("/data.json").then((res) => {
        const company = findCompanyById(res.data, companyIdFromLocalStorage);
        setCompanyData(company || null);
      });
    } else {
      setCompanyData(null);
    }
  }, []);

  return companyData ? (
    <StyledCompanyDetailPageContainer>
      <StyledCompanyDetailedHeader>
        <StyledCompanyLogoBox bgcolor={companyData?.logoBackground}>
          <img src={companyData?.logo} alt="" />
        </StyledCompanyLogoBox>

        <StyledCompanyNameBox>
          <span>{companyData?.company}</span>
          <span>{companyData?.company.toLowerCase() + ".com"}</span>
        </StyledCompanyNameBox>

        <StyledButtonSecondary>
          <a href={companyData?.website}>Company Stite</a>
        </StyledButtonSecondary>
      </StyledCompanyDetailedHeader>

      <StyledCompanyDetailDescContainer>
        <StyledShortInfoBox>
          <div>
            <StyledPostTimeAndContractBox>
              <span>{companyData?.postedAt}</span>•
              <span>{companyData?.contract}</span>
            </StyledPostTimeAndContractBox>
            <StyledCompanyHugeNameBox>
              {companyData?.position}
            </StyledCompanyHugeNameBox>
            <StyledCompanyLocationBox>
              {companyData?.location}
            </StyledCompanyLocationBox>
          </div>
          <StyledButtonMain>
            <a href={companyData?.apply}>Apply Now</a>
          </StyledButtonMain>
        </StyledShortInfoBox>

        <StyledLargeDescBox>
          <p>{companyData?.description}</p>
        </StyledLargeDescBox>

        <StyledRequirementsBox>
          <h3>Requirements</h3>
          <p>{companyData?.requirements.content}</p>
          <StyledUl>
            {companyData?.requirements.items.map((item) => (
              <li>{item}</li>
            ))}
          </StyledUl>
        </StyledRequirementsBox>
      </StyledCompanyDetailDescContainer>
    </StyledCompanyDetailPageContainer>
  ) : (
    <StyledErrorMessage>
      Data loading error :c
      <StyledButtonMain
        paddingx="1.2rem"
        paddingy="1.2rem"
        onClick={() => toMainPage("/")}
      >
        Return to main page
      </StyledButtonMain>
    </StyledErrorMessage>
  );
};
