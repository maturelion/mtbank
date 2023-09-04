import React, { useEffect } from "react";
import { CurencySection, HomeStyle, PocketSection } from "./Home.styled";
import CreditCards from "../../components/CreditCards/CreditCards";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import MyBalance from "../../components/MyBalance/MyBalance";
import Feature from "../../components/Feature/Feature";
import Subtitle from "../../components/Subtitle/Subtitle";
import Offer from "../../components/Offer/Offer";
import Currency from "../../components/Currency/Currency";
import logo from "../../assets/green-logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserBalance } from "../../feature/wallet/WalletActions";
import { getUserPockets } from "../../feature/pocket/PocketActions";

const Home = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { balance, loadingBalance } = useSelector((state) => state.wallet);
  const { pockets } = useSelector((state) => state.pocket);

  useEffect(() => {
    Object.keys(user).length && dispatch(getUserBalance({ user }));
    Object.keys(user).length && dispatch(getUserPockets({ user }));
  }, [dispatch, user]);

  return (
    <>
      <TopBar
        left={<img src={logo} alt="" height={30} width={100} />}
        right={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12H22"
              stroke="#05BE71"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
      <HomeStyle>
        <MyBalance balance={balance} loadingBalance={loadingBalance} />
        <Feature />
        <Offer />
        <PocketSection>
          <Subtitle
            name="My Pocket"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5666 8.79174C14.2166 9.1334 14.0166 9.62508 14.0666 10.1501C14.1416 11.0501 14.9666 11.7084 15.8666 11.7084H17.5V12.9167C17.5 15.4167 15.8333 17.0834 13.3333 17.0834H5.83329C3.33329 17.0834 1.66663 15.4167 1.66663 12.9167V7.08341C1.66663 4.81675 3.03329 3.23341 5.15829 2.96675C5.37496 2.93341 5.59996 2.91675 5.83329 2.91675H13.3333C13.55 2.91675 13.7583 2.92507 13.9583 2.9584C16.1083 3.2084 17.5 4.80008 17.5 7.08341V8.29176H15.7666C15.2999 8.29176 14.8749 8.47507 14.5666 8.79174Z"
                  stroke="#05BE71"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8334 7.5H5.83337"
                  stroke="#05BE71"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3333 9.14171V10.8584C18.3333 11.3168 17.9667 11.6917 17.5 11.7084H15.8667C14.9667 11.7084 14.1417 11.0501 14.0667 10.1501C14.0167 9.62507 14.2167 9.13339 14.5667 8.79173C14.875 8.47506 15.3 8.29175 15.7667 8.29175H17.5C17.9667 8.30841 18.3333 8.68338 18.3333 9.14171Z"
                  stroke="#05BE71"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            linkName="Create"
            link="/new-pocket"
          />
          <CreditCards pockets={pockets.slice(0, 2)} />
          <Link
            to="pocket"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBlockStart: "20px",
            }}
          >
            View more
          </Link>
        </PocketSection>
        <CurencySection>
          <Subtitle
            name="Curency"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66663 9.5C6.66663 10.1417 7.16663 10.6667 7.77496 10.6667H9.02496C9.55829 10.6667 9.99163 10.2083 9.99163 9.65C9.99163 9.04167 9.72496 8.825 9.33329 8.68333L7.33329 7.98333C6.93329 7.84167 6.66663 7.625 6.66663 7.01667C6.66663 6.45833 7.09996 6 7.63329 6H8.88329C9.49996 6.00833 9.99996 6.525 9.99996 7.16667"
                  stroke="#05BE71"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33337 10.7083V11.3249"
                  stroke="#05BE71"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33337 5.34155V5.99155"
                  stroke="#05BE71"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.32496 14.9834C12.0023 14.9834 14.9833 12.0024 14.9833 8.32508C14.9833 4.64779 12.0023 1.66675 8.32496 1.66675C4.64766 1.66675 1.66663 4.64779 1.66663 8.32508C1.66663 12.0024 4.64766 14.9834 8.32496 14.9834Z"
                  stroke="#05BE71"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8167 16.5666C11.5667 17.6249 12.7917 18.3166 14.1917 18.3166C16.4667 18.3166 18.3166 16.4666 18.3166 14.1916C18.3166 12.8083 17.6333 11.5833 16.5917 10.8333"
                  stroke="#05BE71"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <Currency />
        </CurencySection>
      </HomeStyle>
      <Footer />
    </>
  );
};

export default Home;
