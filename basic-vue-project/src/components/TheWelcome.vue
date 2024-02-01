<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import UserIcon from './icons/IconUser.vue'
import LocMapIcon from './icons/IconLocMap.vue'
import GrowthIcon from './icons/IconGrowth.vue'
import ToolBoxIcon from './icons/IconTool.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <UserIcon />
    </template>
    <template #heading>Opening</template>
    
    Hello, TheFlyingDeutchman here. 
    Or simply Tim Gerschner. 
    I'm an beginner level programmer. 
    Or at least consider myself to be. As this is my first project on a vue framework. 
    As this is to show that I can both comprehend code and modify simple functions to whatever would be required.
    The goal of this page is to work as a portfolio on specfically my programming skills.
    And maybe more to come.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <LocMapIcon />
    </template>
    <template #heading>Location</template>
    
    I am situated in the Wellington Region of New Zealand. 
    However in terms of distance the furthest I can realistically reach as of now is Kapiti.
    I am also able to use the Metlink transport (or capital connection) to reach Wellington Central.
    <br/>

  
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <GrowthIcon />
    </template>
    <template #heading>Ecosystem</template>
    
    Currently as of now, not a lot. I have 0 work or job experiences. 
    However, I have done multiple projects which I think proves that I am more than capable of learning and achieving results.
    I will catalogue my projects in a list on this or maybe another page for you to view and read on what I've done.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolBoxIcon />
    </template>
    <template #heading>Toolbox</template>
    
    Toolbox in this context, is what I have amassed in said toolbox - the tools to repair, build and setup. However the tools are only as good as it's maker, and most vitally the wielder.
    For me right now I am rather inexperienced in the creating things from scratch department. I can read up on, see pre-existing makes and builds. To modify for what's requested.
    As for the tools stashed and ready for use in the toolbox? I have is: Python, Javascript, HTML, CSS, soon Typescript, and of course Git.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>
    Created using Vue. Thank you Vue for creating such an amazing framework that makes webdev so much more easier. Even to entry level programmers!
    <br><br>
    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
    <br>
    Their discord: <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>
    <br>
    stackoverflow: <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a>
      <br>
      Their <a href="https://news.vuejs.org" target="_blank" rel="noopener">mailing list</a>
      <br>
      Their <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>
</template>
