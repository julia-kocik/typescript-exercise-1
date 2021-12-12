import { useState, useEffect } from 'react';
import axios from 'axios';

interface GetUserResponse {
  email: string;
}

interface GetBankAccountsResponse {
  accounts: Array<{
    // Typ number uzyty dla uproszczenia zadania
    balance: number;
  }>;
}

interface UserDetailsViewProps {}

export const UserDetailsView = (props: UserDetailsViewProps) => {
  // Implementation...
  const [user, setUser] = useState<GetUserResponse | null>(null)
  const [account, setAccount] = useState<GetBankAccountsResponse | null>(null)
  useEffect(() => {
    const fetchUser = async () => {
      //const userObj = await axios'/api/user'
      const userObj = await axios('https://mocki.io/v1/d053a495-3838-41d3-a5ba-cca3704f1fd1');
      setUser(userObj.data)
    };
    const fetchAccounts = async () => {
      //const accountObj = await axios'/api/bank-accounts/'
      const accountsObj = await axios('https://mocki.io/v1/2274d0df-5897-471e-b16d-f79ac215abb0');
      setAccount(accountsObj.data)
    };
    fetchUser();
    fetchAccounts();
  }, []);
  return (
    user === null || account === null ?
    <h1>Loading...</h1>
    :
    <div>
        <h1>User: {user?.email}</h1>
        <p>Bank account: {account.accounts[0].balance}</p>
    </div>
  )
};
