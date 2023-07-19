import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionButton } from '../Header/styles'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Caregoria" required />

            <TransactionType>
              <TransactionTypeButton variant="income" value="income">
                <ArrowCircleUp size={24} /> Entrada
              </TransactionTypeButton>

              <TransactionTypeButton variant="outcome" value="outcome">
                <ArrowCircleDown size={24} /> Saída
              </TransactionTypeButton>
            </TransactionType>

            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
