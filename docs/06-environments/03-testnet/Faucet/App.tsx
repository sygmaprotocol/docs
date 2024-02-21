import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TollIcon from "@mui/icons-material/Toll";
import CircularProgress from "@mui/material/CircularProgress";

import DomainSelect from "./components/DomainSelect";
import TokenSelect from "./components/TokenSelect";
import TokenInfo from "./components/TokenInfo";
import TxHashLabel from "./components/TxHashLabel";
import ErrorDialog from "./components/ErrorDialog";
import Progress from "./components/Progress";

import { getDomains, getTokens, mintRequest } from "./services/ConfigService";

import { sygmaTheme } from "./themes/SygmaTheme";

// Timeout interval for timer
const TIMEOUT = 60 //seconds

function App() {
  const [domains, setDomains] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [sDomain, setsDomain] = useState<any>();
  const [sToken, setsToken] = useState<any>({});
  const [toAddress, setsToAddress] = useState("");
  const [txHash, setsTxHash] = useState("");
  const [minting, setsMinting] = useState(false);
  const [mintingFinished, setsMintingFinished] = useState(false);
  const [serverError, setServerError] = useState<any>();
  const [expiredDate, setExpiredDate] = useState(Cookies.get('mintedExpires'));
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const timeout = Cookies.get('mintedExpires')
    setExpiredDate(timeout)
    getDomains("https://faucet-api-stage.buildwithsygma.com").then(
      (domains) => {
        setDomains(domains.domains);
      }
    );
  }, []);

  useEffect(() => {
    if (expiredDate) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          const timeLeft =  Date.parse(expiredDate) - Date.now()
          if (timeLeft <= 0) {
            setExpiredDate(undefined)
            clearInterval(timer);
        }
          return timeLeft
        });

      }, 1000);
      return () => {
        setExpiredDate(undefined)
        clearInterval(timer);
      };
    }

  }, [expiredDate]);

  const setSelectedDomain = (selectedDomain) => {
    setsDomain(selectedDomain);
    getTokens(
      "https://faucet-api-stage.buildwithsygma.com",
      selectedDomain.id
    ).then((tokens) => {
      setTokens(tokens.tokens);
    });
    setsToken({});
  };

  function setSelectedToken(selectedToken) {
    setsToken({});
    setsToken(selectedToken);
  }

  const handleToAddressChange = (event) => {
    setsToAddress(event.target.value);
  };

  const mint = (e) => {
    e.preventDefault();
    setsMinting(true);
    const timeToExpire = new Date(new Date().getTime() + TIMEOUT * 1000);
    Cookies.set("mintedExpires", timeToExpire.toISOString(), {
      expires: timeToExpire,
    });
    mintRequest(
      "https://faucet-api-stage.buildwithsygma.com",
      sDomain.id,
      sToken.address,
      toAddress
    )
      .then((respo) => {
        setsTxHash(respo.txHash);
        setsMinting(false);
        setsMintingFinished(true);
      })
      .catch((error) => {
        console.error(error);
        setsMinting(false);
        setsMintingFinished(false);
        setServerError(error);
      });
  };

  const isFilled = () => {
    return sDomain !== undefined && sToken.address !== undefined && toAddress !== "";
  };

  return (
    <div className="Faucet">
      <ThemeProvider theme={sygmaTheme}>
        <Container maxWidth="sm">
          <Box
            component="form"
            noValidate
            onSubmit={mint}
            sx={{ height: sDomain && sToken.address ? "120vh" : "100vh", padding: "1.5rem" }}
          >
            <Box sx={{ padding: "1rem", marginBottom: "2rem" }}>
              <img loading="lazy" src="../../../../img/full-logo.png" width={"100%"} alt="logo"></img>
            </Box>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <DomainSelect
                    disabled={minting}
                    domainArray={domains}
                    setSelectedDomain={setSelectedDomain}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TokenSelect
                    disabled={!sDomain || minting}
                    tokenArray={tokens}
                    setSelectedToken={setSelectedToken}
                  />
                </Grid>

                {sToken.address && <TokenInfo tokenInfo={sToken} />}

                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth>
                    <TextField
                      onChange={handleToAddressChange}
                      value={toAddress}
                      label="Destination address"
                      variant="filled"
                      required
                      disabled={minting}
                    ></TextField>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  {txHash && <TxHashLabel txHash={txHash} />}
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
                  {expiredDate && <Progress progress={progress} timeout={TIMEOUT} /> }
                  {!expiredDate && minting ? (
                    <Box sx={{ m: 1 }}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    !expiredDate && !mintingFinished && (
                      <Button
                        id="mint"
                        type="submit"
                        disabled={!isFilled()}
                        variant="contained"
                        size="large"
                        disableElevation
                        startIcon={<TollIcon />}
                      >
                        Mint
                      </Button>
                    )
                  )}
                </Grid>
              </Grid>
            </Paper>
          </Box>
          {serverError && (
            <ErrorDialog
              response={serverError.response}
              isOpen={true}
              close={() => setServerError(false)}
            />
          )}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;