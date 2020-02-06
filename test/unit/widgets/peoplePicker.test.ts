jest.mock('rdflib')
import * as RdfLib from 'rdflib'
jest.mock('solid-auth-client')
import * as SolidAuthClient from 'solid-auth-client'

import { PeoplePicker, GroupPicker, Group, GroupBuilder } from '../../../src/widgets/peoplePicker'
import { element } from '../../helpers/dom'

describe('PeoplePicker', () => {
  it('exists', () => {
    expect(new PeoplePicker()).toBeInstanceOf(PeoplePicker)
  })
})

describe('PeoplePicker.render', () => {
  it('exists', () => {
    expect(new PeoplePicker().render).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const typeIndex = {}
    const groupPickedCb = () => {}
    const options = {}
    const peoplePicker = new PeoplePicker(element, typeIndex, groupPickedCb, options)
    expect(peoplePicker.render()).toBeTruthy()
  })
})

describe('PeoplePicker.findAddressBook', () => {
  it('exists', () => {
    expect(new PeoplePicker().findAddressBook).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const typeIndex = {}
    const groupPickedCb = () => {}
    const options = {}
    const peoplePicker = new PeoplePicker(element, typeIndex, groupPickedCb, options)
    expect(peoplePicker.findAddressBook()).toBeTruthy()
  })
})

describe('PeoplePicker.createNewGroup', () => {
  it('exists', () => {
    expect(new PeoplePicker().createNewGroup).toBeInstanceOf(Function)
  })
  it.skip('runs', () => {
    const typeIndex = {}
    const groupPickedCb = () => {}
    const options = {}
    const peoplePicker = new PeoplePicker(element, typeIndex, groupPickedCb, options)
    expect(peoplePicker.createNewGroup(RdfLib.sym(''))).toBeTruthy()
  })
})

describe('PeoplePicker.onSelectGroup', () => {
  it('exists', () => {
    expect(new PeoplePicker().onSelectGroup).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const typeIndex = {}
    const groupPickedCb = () => {}
    const options = {}
    const peoplePicker = new PeoplePicker(element, typeIndex, groupPickedCb, options)
    expect(peoplePicker.onSelectGroup(RdfLib.sym(''))).toBeTruthy()
  })

})

describe('GroupPicker', () => {
  it('exists', () => {
    expect(new GroupPicker()).toBeInstanceOf(GroupPicker)
  })
})

describe('GroupPicker.render', () => {
  it('exists', () => {
    expect(new GroupPicker().render).toBeInstanceOf(Function)
  })
})

describe('GroupPicker.loadGroups', () => {
  it('exists', () => {
    expect(new GroupPicker().loadGroups).toBeInstanceOf(Function)
  })
})

describe('GroupPicker.handleClickGroup', () => {
  it('exists', () => {
    expect(new GroupPicker().handleClickGroup).toBeInstanceOf(Function)
  })
})

describe('Group', () => {
  it('exists', () => {
    expect(new Group()).toBeInstanceOf(Group)
  })
})

describe('Group.render', () => {
  it('exists', () => {
    expect(new Group().render).toBeInstanceOf(Function)
  })
})

describe('GroupBuilder', () => {
  it('exists', () => {
    expect(new GroupBuilder()).toBeInstanceOf(GroupBuilder)
  })
})

describe('GroupBuilder.render', () => {
  it('exists', () => {
    expect(new GroupBuilder().render).toBeInstanceOf(Function)
  })
})

describe('GroupBuilder.refresh', () => {
  it('exists', () => {
    expect(new GroupBuilder().refresh).toBeInstanceOf(Function)
  })
})

describe('GroupBuilder.add', () => {
  it('exists', () => {
    expect(new GroupBuilder().add).toBeInstanceOf(Function)
  })
})

describe('GroupBuilder.handleRemove', () => {
  it('exists', () => {
    expect(new GroupBuilder().handleRemove).toBeInstanceOf(Function)
  })
})

describe('GroupBuilder.setGroupName', () => {
  it('exists', () => {
    expect(new GroupBuilder().setGroupName).toBeInstanceOf(Function)
  })
})
