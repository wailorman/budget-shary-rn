import React, { Component } from 'react'

import Screen from '../components/Screen'
import Hint from '../components/Hint'

import SharingParticipantTitle from '../components/BudgetShares/SharingParticipantTitle'
import SharingProductContainer from '../components/BudgetShares/SharingProductContainer'
import SharingProductTitle from '../components/BudgetShares/SharingProductTitle'
import SharingSelectionButton from '../components/BudgetShares/SharingSelectionButton'
import SharingParticipantButton from '../components/BudgetShares/SharingParticipantButton'
import SharingParticipantsContainer from '../components/BudgetShares/SharingParticipantsContainer'
import SharingInlineParticipantsList from '../components/BudgetShares/SharingInlineParticipantsList'
import SharingParticipantContainer from '../components/BudgetShares/SharingParticipantContainer'

export default class BudgetShares extends Component {
  render() {
    const item = ({ selectAll = true, deselectAll } = {}) => (
      <SharingParticipantContainer>
        <SharingParticipantTitle
          name="Алиса"
          percentageShare={38}
          monetaryShare={600}
        />
        <SharingProductContainer>
          <SharingProductTitle
            name="Пиво"
            price="180"
          />
          <SharingSelectionButton
            selectAll={selectAll}
            deselectAll={deselectAll}
          />
          <SharingParticipantsContainer>
            <SharingParticipantButton
              name="Майк"
              active
            />
            <SharingParticipantButton
              name="Боб"
            />
            <SharingParticipantButton
              name="Боб"
            />
            <SharingParticipantButton
              name="Боб"
              active
            />
          </SharingParticipantsContainer>
        </SharingProductContainer>
        <SharingProductContainer>
          <SharingProductTitle
            name="Пиво"
            price="180"
          />
          <SharingInlineParticipantsList
            names={['Боб', 'Алиса', 'Джек']}
          />
        </SharingProductContainer>
      </SharingParticipantContainer>
    )

    return (
      <Screen>
        <Hint
          style={{
            marginBottom: 20,
          }}
        >
          В каждом продукте выделите тех, кто должен на него скинуться.
        </Hint>


        {item()}
        {item({ selectAll: false, deselectAll: true })}
        {item()}
        {item()}
      </Screen>
    )
  }
}
