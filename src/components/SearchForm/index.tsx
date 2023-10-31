import { useContextSelector } from 'use-context-selector'
import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../contexts/TransactionContext'

const searchFormSchema = z.object({
  query: z.string(),
})

/**
 *  Por que um componente renderiza?
 *
 * Hooks Changed (Mudou o estado, contexto, reducer)
 * Props Changed (Mudou propriedades)
 * Parent rendered (componente pai renderizou)
 *
 * Qual o fluxo de renderização?
 *
 * 1. React recria o HTML da interface do componente
 * 2. Compara a versão HTML recriada com a interior
 * 3. If changed ? print(newHTML)
 *
 * Memo:
 * 0. Mudou alguma coisa nos hooks do componente || props chnaged (deep comparsion) ?
 * 0.1  Comparar a versão anterior dos hooks e props (Problema: Ficar comparando váriavel as vezes é menos vantajoso)
 * 0.2 If changed ? return render();
 *
 */

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query)
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  )
}
