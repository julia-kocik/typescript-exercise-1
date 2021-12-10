import React, { useState, useEffect } from 'react';

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
  console.log(user)
  useEffect(() => {
    const fetchUser = async () => {
      const userObj =  {email: 'julia@example.com'}
      await setTimeout(() => {
          setUser(userObj)
        }, 3000);
    };
    const fetchAccounts = async () => {
        const accountsObj =  {accounts: [{balance: 12345}, {balance: 54321}, {balance: 13153}, {balance: 12435}]}
        await setTimeout(() => {
            setAccount(accountsObj)
          }, 3000);
      };
    fetchUser();
    fetchAccounts();
  }, []);

  return (
    user === null || account === null ?
    <h1>Loading</h1>
    :
    <div>
        <h1>User is{user?.email}</h1>
        {account.accounts.map((item) => (
            <p>{item.balance}</p>
        ))}
    </div>
  )
};
