import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { PriceHighLight, TransactionContainer, TransactionTable } from './style'
import { TransactionContext } from '../../contexts/TransactionContext'

export function Transactions() {
  const { transactions } = useContext(TransactionContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighLight
                    variant={
                      transaction.type === 'income' ? 'income' : 'outcome'
                    }
                  >
                    {transaction.type === 'income'
                      ? `R$ ${transaction.price}`
                      : `-R$ ${transaction.price}`}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
